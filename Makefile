# Makefile

build:
	electron . helloworld.html

build-helloworld: build

build-lists:
	electron . collections.html

build-email:
	electron . email.html

build-fira:
	electron . firacode.html