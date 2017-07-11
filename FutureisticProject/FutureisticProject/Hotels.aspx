<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Hotels.aspx.cs" Inherits="FutureisticProject.Hotels" %>

<!DOCTYPE html>

<html>
<head>
    <title>Hotels</title>
    <style>
        table, td, th 
        {
            border: solid 1px;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <div>
        <div>
            <span>Search by city name - autocomplete filed:</span>
              <input id="autocomplete" list="cities" name="cities" placeholder="Enter City"/>
              <datalist id="cities">
             </datalist>
        </div>
        <button id="find-hotels-by-query">Find hotels</button>

      <%--  <button id="get-hotels-from-server">Refresh Hotels list</button>--%>
        <div hidden id="loading"><img src="img/Loading_icon.gif" alt="Loading, please wait..." /></div>
        <div id="results">
            <table id="tableResults">
                <tbody></tbody>
            </table>
        </div>
    </div>

    <script src='<%= ResolveUrl("~/Scripts/jQuery/jquery-1.10.2.js") %>'></script>
    <script src='<%= ResolveUrl("~/Scripts/main.js") %>'></script>
    <script src='<%= ResolveUrl("~/Scripts/hotels.js") %>'></script>

</body>
</html>
