# Write your MySQL query statement below
Select MAX(num) AS num FROM (SELECT num FROM MyNumbers GROUP BY num HAVING COUNT(num) = 1) as uniq_num