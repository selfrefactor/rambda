#!/usr/bin/env python3
import os

os.chdir(os.path.join(os.path.dirname(__file__), 'source'))
spec_js = {f.replace('.spec.js','') for f in os.listdir() if f.endswith('.spec.js')}
spec_ts = {f.replace('-spec.ts','') for f in os.listdir() if f.endswith('-spec.ts')}
exclude = {'radashi-comparison','remeda-comparison','convertToType','transformPropObject','_playground'}
spec_js.difference_update(exclude)
spec_ts.difference_update(exclude)
both = sorted(spec_js & spec_ts)
only_js = sorted(spec_js - spec_ts)
only_ts = sorted(spec_ts - spec_js)

all_methods = sorted(spec_js | spec_ts)
print('Total methods:', len(all_methods))
print()
print('=== Both (%d) ===' % len(both))
for b in both: print(b)
print()
print('=== Only .spec.js (%d) ===' % len(only_js))
for b in only_js: print(b)
print()
print('=== Only -spec.ts (%d) ===' % len(only_ts))
for b in only_ts: print(b)
print()
# Print all methods for the refactor.md
print('=== ALL METHODS (alphabetical) ===')
for m in all_methods: print(m)
