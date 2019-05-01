import os
from subprocess import call

book_dir = "tektur_6478ddd6-a447-4a5d-a467-1d3820bf7049"
pathes = []

for f in os.listdir(book_dir):
	if os.path.isdir(os.path.join(book_dir,f)):
		pathes.append(os.path.join(book_dir,f,'resource.xml'))
pathes.append(os.path.join(book_dir,'resource.xml'))


for p in pathes:
	
	args = [
		'mlcp.bat',
		'import',
		'-database',
		'xml-scrapper-content',
		'-username',
		'alex',
		'-password',
		'anoma66',
		'-host',
		'localhost',
		'-input_file_path',
		p,
		'-input_file_type', 
		'aggregates',
		'-output_collections',
		'/topics',
		'-output_uri_prefix',
		'/topic/',
		'-output_uri_suffix',
		'.xml']
	try:
		call(args)
	except:
		print "could not import ",p
	
	
	
	