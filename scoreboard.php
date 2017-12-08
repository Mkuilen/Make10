<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="assets/css/scoreboard.css">
        <link rel="stylesheet" type="text/css" href="assets/css/index.css">
        <title>Make 10 Game</title>
        <meta charset="UTF-8">
        <meta name="description" content="Make 10 Game">
        <meta name="author" content="Matthijs van de Kuilen">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body background="assets/images/backgroundsite.jpg">
        <div class="center">
            <h1 id="hoofdtekst">Scoreboard</h1><br>
            <button id="buttonclose" onclick="window.location.href='https://make10-matthijspc.c9users.io/'" type="button">Back to home</button>
            <?php
            require 'database.php';
            
            $sql = "SELECT * FROM `scoreboard` ORDER BY `scoreboard`.`points` DESC";
            $result = $conn->query($sql);
            $finalResult = $result->fetchAll(PDO::FETCH_ASSOC);
            ?>
            <table id="scoretable">
                <tr>
                    <th>Naam</th>
                    <th>Punten</th>
                </tr>
                <?php
                foreach ($finalResult as $row) {
                    echo "<tr>";
		            echo "<td>". $row["name"]. "</td>";
		            echo "<td>". $row["points"]. "</td>";
		            echo "</tr>";
		    		$conn = null;
                }
               ?>
            </table>
        </div>
    </body>
</html>