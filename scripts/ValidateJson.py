import jsonschema
import json

schema = {}
profile_data = {}

with open("scripts/schema.json") as _schema:
  schema = json.load(_schema)

with open("src/data/Profile.json") as data:
  profile_data = json.load(data)
  
# validating profile data according to schema
jsonschema.validate(profile_data, schema)

# checking duplicates
names = set()
for profile in profile_data:
  if profile["name"] in names:
    raise ValueError("already have profile of this name")
  else:
    names.add(profile["name"])
