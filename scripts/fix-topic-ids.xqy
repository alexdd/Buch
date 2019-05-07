xquery version "1.0-ml";

(: this script replaces technical filenames and IDs containing an UUID set by Tektur CCMS 
    with the title of the topic :)
    
declare function local:replace-uri($old-uri, $new-uri) {
  let $lock := ($old-uri, $new-uri) ! xdmp:lock-for-update(.),
      $prop-ns := fn:namespace-uri-from-QName(xs:QName("prop:properties")),
      $properties := xdmp:document-properties($old-uri)/node()/node()[fn:namespace-uri(.) ne $prop-ns]
      return (
        xdmp:document-insert(
          $new-uri,
          fn:doc($old-uri),
          xdmp:document-get-permissions($old-uri),
          xdmp:document-get-collections($old-uri)
        ),
        xdmp:document-delete($old-uri),
        xdmp:document-set-properties($new-uri, $properties)
    )
};

declare function local:fix-topics() {
  for $ref in collection("/topics")//topicref
    let $topic := collection("/topics")[contains(fn:document-uri(.),$ref/@href)],
        $new-uri := concat(replace(replace(replace(normalize-space($topic/*/title),' ','_'),'\[\[','_'),'\]\]','_'),'.xml'),
        $new := attribute href { $new-uri },
        $old-uri := fn:document-uri($topic)
        return (
          local:replace-uri($old-uri, $new-uri),
          xdmp:node-replace($ref/@href, $new) 
        )
};

declare function local:fix-map() {
  let $old-uri := fn:document-uri(collection("/topics")[descendant::map]),
      $new-uri := "XML_Hands_On.xml"
      return 
        local:replace-uri($old-uri,$new-uri)
};

(xdmp:invoke-function(local:fix-topics#0),
xdmp:invoke-function(local:fix-map#0))

