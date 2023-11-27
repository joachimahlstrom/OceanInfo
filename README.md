# OceanInfo
Applikationen är programmerad i React Native Framework
Wavepage
API-integration: Hämtar data från en extern webbtjänst som heter MarineForecast. Detta görs för att hämta information om våghöjd baserat på den angivna latituden och longituden. Genom att använda fetch-funktionen kan den här sidan hämta våghöjdsdata från olika platser och visa upp resultatet för kommande sju dagarna. 
Datarendering: Denna sida använder en Scrollview-komponent för att visa det hämtade våghöjdsdatan på ett användarvänligt sätt. Data presenteras för flera dagar och varje dag visas separat.
Emergency
Platstjänster: Denna sida utnyttjar expo-location biblioteket för at få tillgång till användarens nuvarande position. Genom att begära behörighet och hämta den aktuella platsen kan denna sida ge användaren en möjlighet att snabbt skicka sin nuvarande plats för att få hjälp vid nödsituationer. 
Kartintegration: Använder react-native-maps komponenten för att visa en karta och en markör som representerar användarens nuvarande plats. Kartan kan visa olika platser och ge användaren en visuell representation av deras omgivning. Den tillhandahåller även en knapp som användaren kan trycka på för att hämta sin plats och eventuellt skicka ett nödanrop om det behövs.
About
”About” sidan skapar och hanterar en SQLite-databas med namnet ”suggestions.db” med hjälp av expo-sqlite biblioteket. Funktionen tillåter användaren att skriva in sina förslag eller synpunkter som sedan sparas, lokalt på enheten. Det utförs även en del databasoperationer som att skapa en tabell för att lagra användarförslag och infoga dessa i databasen. Genom att hantera SQL- frågor kan sidan effektivt spara och hämta användardata. Med detta sker det en hantering av användarinput med möjligheten att ge förslag på förbättringar för applikationen. Detta görs genom en textinmatning komponent för att sedan skicka dem för lagring i databasen. När förslaget är inskickat får även användaren en avisering genom en Alert komponent för att bekräfta för användaren att deras förslag har skickats framgångsrikt och sparats i databasen. Detta ger användaren en bekräftelse på att deras åtgärd lyckades.

