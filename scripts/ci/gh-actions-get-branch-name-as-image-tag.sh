#!/bin/bash

GH_EVENT_NAME=$1
GH_REF=$2
GH_BASE_REF=$3
BRANCH_NAME=""

# Determine the branch name based on the event
if [[ $GH_EVENT_NAME == 'push' ]]; then
  BRANCH_NAME="${GH_REF#refs/heads/}"
elif [[ $GH_EVENT_NAME == 'pull_request' ]]; then
  BRANCH_NAME="$GH_BASE_REF"
else
  BRANCH_NAME="${GH_REF#refs/heads/}"
fi

# Sanitize the branch name
# Replace underscores with hyphens
CLEAN=${BRANCH_NAME//_/-}
# Replace spaces with underscores
CLEAN=${CLEAN// /_}
# Replace slashes with underscores
CLEAN=${CLEAN//\//_}
# Remove non-alphanumeric, hyphen, or underscore characters
CLEAN=${CLEAN//[^a-zA-Z0-9_-]/}
# Convert to lowercase
CLEAN=$(echo -n "$CLEAN" | tr 'A-Z' 'a-z')

# Output the sanitized branch name
echo "$CLEAN"
