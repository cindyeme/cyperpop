# import docx2txt
import sys
import base64


# my_text = docx2txt.process(sys.argv[1])

my_file = sys.argv[1]
image = open(my_file, 'rb')
image_read = image.read()
image_64_encode = base64.encodebytes(image_read) #encodestring also works aswell as decodestring

print(str(image_64_encode))
# print(my_text)
