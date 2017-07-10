<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HotelRates.aspx.cs" Inherits="FutureisticProject.HotelRates" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <h2>Hotel Rates</h2>

    <div id="results">
        <table id="tableResults">
            <tbody></tbody>
        </table>
    </div>

    <script src='<%= ResolveUrl("~/Scripts/jQuery/jquery-1.10.2.js") %>'></script>
    <script src='<%= ResolveUrl("~/Scripts/main.js") %>'></script>
    <script src='<%= ResolveUrl("~/Scripts/hotelRates.js") %>'></script>

</body>
</html>
