# Makefile

build:
	electron . helloworld.html

build-helloworld: build

build-lists:
	electron . collections.html

build-fira:
	electron . firacode.html