import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabela.css';

export default function Tabela({ kontakt }) {

    var kolona = document.getElementsByClassName("trr");
    var klik = 0;

    function oboji() {
        if (klik % 2 === 0) {
            for (var i = 1; i < kolona.length; i++) {
                if (i % 2 === 1) {
                    kolona[i].style.backgroundColor = "#dedede";
                } else {
                    kolona[i].style.backgroundColor = "white";
                }
            }
        }
        else {
            for (i = 1; i < kolona.length; i++) {
                kolona[i].style.backgroundColor = "white";
            }
        }
        klik++;
    }

    var rows = document.getElementsByTagName("tr");
    function sort() {
        var switching, i, x, y, shouldSwitch;
        switching = true;
        while (switching) {
            switching = false;
            for (i = 1; i < rows.length - 1; i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[4];
                y = rows[i + 1].getElementsByTagName("td")[4];
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    var klik1 = 0;
    function rezultati() {
        if (klik1 % 2 === 0) {
            var x;
            for (var i = 1; i < rows.length; i++) {
                x = rows[i].getElementsByTagName("TD")[4];
                if (Number(x.innerHTML) < 50) {
                    kolona[i].style.backgroundColor = "#e6877a";
                }
                else kolona[i].style.backgroundColor = "#9ce67a";
            }
        }
        else {
            for (i = 1; i < rows.length; i++) {
                kolona[i].style.backgroundColor = "white";
            }
        }
        klik1++;
    }
    var klik2 = 0;
    function izdvoj() {
        if (klik2 % 2 === 0) {
            var x;
            for (var i = 1; i < rows.length; i++) {
                x = rows[i].getElementsByTagName("TD")[4];
                if (Number(x.innerHTML) < 50) {
                    kolona[i].style.display = "none";
                }
                kolona[i].style.backgroundColor = "white";
            }
        }
        else {
            for (i = 1; i < rows.length; i++) {
                kolona[i].style.display = "";
            }
        }
        klik2++;
    }


    return (
        <div class="container mt-5">

            <button class="btn btn-outline-danger ms-2" onClick={sort} >Sortiraj</button>
            <button class="btn btn-outline-danger ms-2" onClick={oboji}>Oboji</button>
            <button class="btn btn-outline-danger ms-2" onClick={izdvoj}>Izdvoj</button>
            <button class="btn btn-outline-danger ms-2" onClick={rezultati}>Markiraj</button>

            <table class="table bg-white mt-5" id="myTable">
                <thead>
                    <tr className="trr">
                        <th>Rnbr</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Skola</th>
                        <th>Bodovi</th>
                    </tr>
                </thead>
                <tbody>
                    {kontakt.map((kontakt) => (
                        <tr className="trr">
                            <td> {kontakt.id} </td>
                            <td> {kontakt.ime} </td>
                            <td> {kontakt.prezime} </td>
                            <td> {kontakt.skola} </td>
                            <td> {kontakt.bodovi} </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )


}
