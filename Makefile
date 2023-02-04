# remove .next folder
.PHONY: clear-cache
clear-cache:
	rm -rf .next

# open dev server before lunch, command dev && open-dev won't work because dev will not end before ctrl + c
# ref: https://github.com/vercel/next.js/discussions/13448#discussioncomment-1708283
.PHONY: open-dev
open-dev:
	open http://localhost:3000

# lunch local dev server
.PHONY: dev
dev: open-dev clear-cache
	npx next dev

# generate static site content
.PHONY: build
build:
	npx next build && npx next export

# preview build result locally
.PHONY: preview
preview:
	npx next start

.PHONY: lint
lint:
	npx next lint

# create new .mdx in <root>/post folder, syntax: make new post=<article name>
.PHONY: new
new:
	echo "---" > ./post/$(post).mdx
	echo "title: '$(post)'" >> ./post/$(post).mdx
	echo "time: $(shell date +%F) $(shell date +%T)" >> ./post/$(post).mdx
	echo "category: []" >> ./post/$(post).mdx
	echo "---" >> ./post/$(post).mdx

# deploy build result to gitHub repo as branch "gh-pages"
.PHONY: deploy
deploy: build
	cd out && \
	git init && \
	git remote -v | grep -w origin || git remote add origin git@github.com:tzynwang/next-blog-v2.git && \
	git branch -m gh-pages && \
	git add -A && \
	git commit -m "[feat] deploy as gh-pages `date +'%Y-%m-%d %H:%M:%S'`" && \
	git push -u origin gh-pages -f

