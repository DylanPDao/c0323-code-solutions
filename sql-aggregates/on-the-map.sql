select "countries"."name",
      count("cityId")
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name"
