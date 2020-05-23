function pattern_matrix_init(pattern_update) {
}

function pattern_matrix_indicate(pos) {
    for (i=0; i<4; i++) {
	$('#i'+i).attr("src", "images/clear.png");
    }
    $('#i'+pos).attr("src", "images/ind.png");
}

function pattern_matrix_program(pattern_update,warp,weft) {
    console.log(pattern_update);
    for (id=0; id<32; id++) {
	if (id<16) {
	    pattern_update(id,warp[id]);
	    if (warp[id]=="r") {
		$('#'+id).attr("src", "images/right.png");
	    } else {
		$('#'+id).attr("src", "images/left.png");
	    }
	} else {
	    pattern_update(id,weft[id]);
	    if (warp[id]=="cw") {
		$('#'+id).attr("src", "images/cw.png");
	    } else {
		$('#'+id).attr("src", "images/ccw.png");
	    }
	}
    }
}
