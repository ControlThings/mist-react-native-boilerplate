#!/bin/bash

RN_MIST_NAME=react-native-mist-library
RN_MIST_VERSION=1.0.20
PKG_SYMLINK=$RN_MIST_NAME.tgz
PACKAGE=$RN_MIST_NAME-$RN_MIST_VERSION.tgz

if [ -f dist/$PKG_SYMLINK ]; then
    if [ -f dist/$PACKAGE ]; then
        exit 0
    fi
fi



ARTIFACTORY_CREDENTIALS=~/.gradle/gradle.properties

if [ ! -f $ARTIFACTORY_CREDENTIALS ]; then
    echo "Please enter your ControlThings Artifactory user name"
    read "ARTIFACTORY_USER"
    echo "Please enter your ControlThings Artifactory (encrypted) password"
    read "ARTIFACTORY_PASSWORD"
else 
    ARTIFACTORY_USER=`awk '{ split($1, elems, "="); if (elems[1] == "artifactory_username") { print elems[2] } }' $ARTIFACTORY_CREDENTIALS`
    ARTIFACTORY_PASSWORD=`awk '{ split($1, elems, "="); if (elems[1] == "artifactory_password") { print elems[2] } }' $ARTIFACTORY_CREDENTIALS`
fi

mkdir -p dist
rm -f dist/$PKG_SYMLINK
(cd dist; curl -u$ARTIFACTORY_USER:$ARTIFACTORY_PASSWORD -O "http://foremost.controlthings.fi:8081/artifactory/generic-local/react-native-mist-library/$PACKAGE" -o dist/$PACKAGE; ln -s $PACKAGE $PKG_SYMLINK)


