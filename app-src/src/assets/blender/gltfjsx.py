#!/usr/local/bin/python3
import sys
import os

filename = sys.argv[1]
basename = os.path.splitext(filename)[0]
basename_first_letter_capitalized = basename[0].upper() + basename[1:]
# print(f'npx gltfjsx {filename}.gltf --transform && cp ./{basename}-transformed.glb ../../../public/ && cp ./{basename_first_letter_capitalized}.jsx ../../')
os.system(f'npx gltfjsx {filename}.gltf --transform && cp ./{basename}-transformed.glb ../../../public/ && cp ./{basename_first_letter_capitalized}.jsx ../../')
