select  "genres"."name",
        count("filmId")
  from "genres"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where CONCAT("firstName", ' ', "lastName") = 'Lisa Monroe'
  group by "genres"."name"
