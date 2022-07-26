#!/bin/bash

cat > ./post/$1.md << ENDOFFILE
---
title: '$1'
time: $(date +%F) $(date +%T)
category: []
---

ENDOFFILE