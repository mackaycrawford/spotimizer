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
    data: [['ABC', '10'],['BBC', '10'],['CBS', '10']],
    rowHeaders: false,
    colHeaders: ["Station", "Budget Percent"],
    contextMenu: false, 
    minSpareRows: 1
  });    
      
      
  })