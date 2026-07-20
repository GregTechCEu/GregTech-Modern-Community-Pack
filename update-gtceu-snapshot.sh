#!/usr/bin/env bash
version=$(curl https://maven.gtceu.com/com/gregtechceu/gtceu/gtceu-1.20.1/8.0.0-SNAPSHOT/maven-metadata.xml | xmllint --xpath '/metadata/versioning/snapshotVersions/snapshotVersion[extension[text()="jar"]][not(./classifier)]/value/text()' -)
url=https://maven.gtceu.com/com/gregtechceu/gtceu/gtceu-1.20.1/8.0.0-SNAPSHOT/gtceu-1.20.1-$version.jar
packwiz url add gregtechceu-modern $url
echo "Added $url"
