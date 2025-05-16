#!/usr/bin/env sh

COMMIT_TYPE=""

if [[ $(git rev-parse -q --verify MERGE_HEAD) != "" ]]; then
  COMMIT_TYPE="MERGE"
elif [[ $(git rev-parse -q --verify REBASE_HEAD) != "" ]]; then
  COMMIT_TYPE="REBASE"
elif [[ $(git rev-parse -q --verify CHERRY_PICK_HEAD) != "" ]]; then
  COMMIT_TYPE="CHERRY-PICK"
fi

echo "$COMMIT_TYPE"
