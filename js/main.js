var pictures = [ "snowynight1k.jpg", "snowynight2k.jpg", "snowynight3k.jpg", "snowynight4k.jpg", "snowynight5k.jpg", "snowynight6k.jpg", "snowynight7k.jpg", "snowynight8k.jpg", "snowynight9k.jpg", "snowynight10k.jpg", "snowynight11k.jpg", "snowynight12k.jpg", "snowynight13k.jpg", "snowynight14k.jpg", "snowynight15k.jpg", "snowynight16k.jpg", "snowynight17k.jpg", "snowynight18k.jpg", "snowynight19k.jpg", "snowynight20k.jpg" ];
var i = 0;
console.log(pictures[19], i);
$(document).ready(function(){
$(".navigationcontainer").on("click", "a.next", function(){
        alert( $( this ).text() );
        console.log(pictures[i]);
        // pictures[i].ajax();
        i++;
});

$(".navigationcontainer").on("click", "a.back", function(){
        console.log(pictures[i]);
        // pictures[i].ajax();
        i--;
});
});