select distinct "firstName",
        "lastName"
    from "customers"
    join "payments" using ("customerId")
    join  "inventory" using ("storeId")
    join "films" using ("filmId")
    where "films"."title" = 'Magic Mallrats'
