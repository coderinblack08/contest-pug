#!/bin/sh

git checkout develop
git push origin master
git checkout master
git merge develop
git push origin master
git checkout develop