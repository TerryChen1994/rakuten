$(function(){
	// 共通テキスト 配列
	var config = {
		name : '楽天テンプレート'
	};

	// ショップ名吐き出し
	// .js-shopNameクラス名が付いたタグにショップ名を吐き出し
	var $targetShopNameAfter = $('.js-shopNameAfter'),
			$targetShopNameBefore = $('.js-shopNameBefore');

	$targetShopNameAfter.each(function () {
		var $this = $(this);
		$this.append(config.name);
	});

	$targetShopNameBefore.each(function () {
		var $this = $(this);
		$this.prepend(config.name);
	});


});