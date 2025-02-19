export default function SQLCommands() {
    return(
        <>
                <div className="article">
        <br/>
        <a href="#/Texts"> ← Back</a>
        <h3>Useful SQL commands:</h3>

<pre>
CREATE DATABASE Testikanta;
<br/>--------------------------<br/><br/>
USE Testikanta;
<br/>--------------------------<br/><br/>
DROP DATABASE Testikanta;
<br/>--------------------------<br/><br/>
CREATE TABLE Testitaulukko;
<br/>--------------------------<br/><br/>
DROP TABLE Testitaulukko;
<br/>--------------------------<br/><br/>
SELECT * FROM Testitaulukko;
<br/>--------------------------<br/><br/>
SELECT TOP 10 * FROM Testitaulukko;
<br/>--------------------------<br/><br/>
SELECT DISTINCT Name FROM Testitaulukko;
<br/>--------------------------<br/><br/>
SELECT * FROM Testitaulukko WHERE Name = 'Sampo' ORDER BY IdNumber ; -- ASC/DESC
<br/>--------------------------<br/><br/>
SELECT Name FROM Testitaulukko WHERE Job = 'Boss' OR Status = 'Board';
<br/>--------------------------<br/><br/>
INSERT INTO Testitaulukko VALUES ('Pekka', 'Board', 123)
<br/>--------------------------<br/><br/>
UPDATE Testitaulukko SET Nimi = "Ossi" WHERE IdNumber = 23431;
<br/>--------------------------<br/><br/>
SELECT Nimi AS Filteröidytnimet FROM Taulukko WHERE Nimi LIKE 'P%';
<br/>--------------------------<br/><br/>
SELECT * FROM Hinnat WHERE Hinta BETWEEN 10 AND 2000;
<br/>--------------------------<br/><br/>
SELECT *  FROM Taulukko WHERE Name IN ('Eppu', 'Hannu', Jari');
<br/>--------------------------<br/><br/>


</pre>


        </div>


        </>
    )
}