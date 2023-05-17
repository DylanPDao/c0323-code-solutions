select "releaseYear",
        "title",
        "genres"."name" as "Genre"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "title" = 'Boogie Amelie'
