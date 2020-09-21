#!/bin/sh

exec 1>&2

git push origin master
git checkout master
git merge develop
git push origin master
git checkout develop