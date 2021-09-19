<?php
$password = 'pass';
$outfile = 'download.zip';
$infile = 'documents/worksheet1.pdf';

header("Content-type: application/octet-stream");
header("Content-disposition: attachment; filename=$outfile");

@system("zip -P $password $outfile $infile");
readfile($outfile);
@unlink($outfile);
?>