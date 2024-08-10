#===========
# It uses dtslint to check if the typings are correct
# Typescript index file is located at `source/index.ts`
yarn test:typings

# before
# yarn out && yarn docs
#===========
# benchmark
# cd ../rambda-scripts && RAMBDA_RUN_ALL=ON RAMBDA_RUN_INDEXES=ON yarn benchmark
#===========
# benchmark:all
# yarn build:step && cd ../rambda-scripts && yarn benchmark:all
#===========
# benchmark:check
# yarn build:step && METHOD=compose yarn benchmark:check:apply
#===========
# benchmark:check:apply
# cd ../rambda-scripts && yarn check-benchmark
#===========
# build
# yarn build:main && yarn build:web
#===========
# build:main
# cross-env NODE_ENV=build rollup -c files/rollup.config.mjs
#===========
# build:step
# yarn populatereadme && yarn build:main
#===========
# build:web
# cross-env NODE_ENV=build rollup -c files/rollup.web.config.mjs
#===========
# d
# yarn out && yarn lint && run d
#===========
# docs
# npx docsify-cli init ./docs && yarn fix-docsify
#===========
# fix-docsify
# cd ../rambda-scripts && yarn fix-docsify:rambda
#===========
# git:add
# git add -A
#===========
# github
# cd ../rambda-scripts && yarn github
#===========
# immutable
# cd ../rambda-scripts && yarn immutable:rambda
#===========
# immutable:x
# cd ../rambda-scripts && yarn immutable:rambdax
#===========
# lint
# yarn git:add && yarn lint:staged && yarn git:add
#===========
# lint:all
# cd ../rambda-scripts && yarn lint
#===========
# lint:staged
# cd ../rambda-scripts && yarn lint:staged
#===========
# new
# cd ../rambda-scripts && yarn new
#===========
# out
# yarn populatedocs && yarn populatereadme && yarn immutable && yarn build
#===========
# populatedocs
# cd ../rambda-scripts && yarn populate:docs
#===========
# populatedocs:x
# cd ../rambda-scripts && yarn populate:docs:rambdax
#===========
# populatereadme
# cd ../rambda-scripts && yarn populate:readme
#===========
# populatereadme:x
# cd ../rambda-scripts && yarn populate:readme:rambdax
#===========
# run:ramda:test
# cd ../rambda-scripts && yarn run:ramda:test
#===========
# test
# jest -o -u --watch
#===========
# test:all
# jest source/*.spec.js -u --bail=false
#===========
# test:ci
# jest source/*.spec.js --coverage --no-cache -w 1

#===========
# test:ts
# yarn test:typings
#===========
# ts
# yarn test:typings
#===========
# usedby
# cd ../rambda-scripts && yarn usedby
#===========
# x
# yarn populatedocs:x && yarn populatereadme:x && yarn immutable:x
#===========