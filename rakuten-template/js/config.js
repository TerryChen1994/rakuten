$(function(){
	// ���̥ƥ����� ����
	var config = {
		name : '��ŷ�ƥ�ץ졼��'
	};

	// ����å�̾�Ǥ��Ф�
	// .js-shopName���饹̾���դ��������˥���å�̾���Ǥ��Ф�
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