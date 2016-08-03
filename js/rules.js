  $(document).ready(function(){
  
 $daypartTable = $("#daypartTable");
  
  $daypartTable.handsontable({
    data: [['10', '10', '10', '10', '10', '10'], []],
    rowHeaders: ['goal', 'actual'],
    colHeaders: [ "Morning", "Midday", "Early Fringe", "Late Fringe", "Prime", "Overnight"],
    contextMenu: false, 
    maxRows: 2

  });
  
  
$stationBudgetTable = $("#stationBudgetTable");
      
    $stationBudgetTable.handsontable({
    data: [['ABC', '10', ''],['BBC', '10', ''],['CBS', '10', '']],
    rowHeaders: false,
    colHeaders: ["Station", "Goal Budget Percent", "Actual Budget Percent"],
    contextMenu: false, 
    minSpareRows: 1
  });    
      
$availsTable= $("#availsTable");
      
    $availsTable.handsontable({
    data: [['ABC', 'Nightly News', 'PM', '12.2', '700']],
    rowHeaders: false,
    colHeaders: ["Station", "Program", "Daypart", "Rating", "Cost"],
    contextMenu: false, 
    minSpareRows: 1
  });    
      
  })