<?php 

$sumN = 0;
$sumN_1 = $_POST['sum'];
$sumAdd = $_POST['sumAdd'];
$percent =$_POST['percent'];
$months = $_POST['term'];
$daysY = 365;

settype($sumN_1, 'integer');
settype($sumAdd, 'integer');
settype($percent, 'float');
settype($months, 'integer');

$date= $_POST['startDate'];

list($day, $month, $year) = explode('.', $date);

$i = 1;
while ($i <= $months) {
  $daysN = cal_days_in_month(CAL_GREGORIAN, $month, $year); 
  $sumN = ($sumN_1 + ($sumN_1 + $sumAdd) * ($daysN / 100) * ($percent / $daysY));
	$sumN_1 = $sumN;
  $i++;

  if ($month < 12) {
    $month++;
  }
  else if ($month == 12) {
    $year++;
    $month = 1; 
	}
};

$result = array("sum" => $sumN, "percent" => $percent, "year" => $year);

echo json_encode($result);
?>
