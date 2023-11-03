 id VARCHAR(255) PRIMARY KEY NOT NULL,
    noteTitle VARCHAR (255) NOT NULL,
    noteDescription VARCHAR(255) NOT NULL,
    createdAt DATETIME GETDATE() NOT NULL



CREATE OR ALTER PROCEDURE addNewNote (
    id VARCHAR(255),
    noteTitle VARCHAR (255) ,
    noteDescription VARCHAR(255) ,
    
)
AS
BEGIN
    INSERT INTO notes (id,noteTitle,noteDescription)
    VALUES (@id,@noteTitle,@noteDescription)
END    