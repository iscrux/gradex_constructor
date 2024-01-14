let controls = {
  'zokol': {
    data: {
      'z01': 'Гранитный',
      'z02': 'Бетонный',
    },
    placeholder: ['b01', 'Выбрать цоколь'],
    title: 'Цоколь',
  },
  'stella': {
    data: {
      'a01': 'вертикальный косой',
      'a02': 'вертикальный округлый сверху и сбоку',
      'a03': 'вертикальный округлый',
      'a04': 'вертикальный округлый с плечиками',
      'a05': 'вертикальный округлый с плечиками, косой',
      'a06': 'вертикальный флаг, косой',
      'a07': 'вертикальный флаг',
      'a08': 'горизонт флаг',
      'a09': 'горизонт округлый',
      'a10': 'вертикальный прямой маленький',
      'a11': 'вертикальный прямой средний',
      'a12': 'вертикальный прямой большой',
      'a13': 'горизонт прямой маленький',
      'a14': 'горизонт прямой средний',
      'a15': 'горизонт прямой большой',
      'a16': 'вертикальный фигурный',
      'a17': 'вертикальный с березой',
      'a18': 'вертикальный свеча',
      'a19': 'вертикальный фигурный с крестом',
    },
    placeholder: ['a01', 'Выбрать стеллу'],
    title: 'Стелла',
  },
  'tumba': {
    data: {
      'b01': 'Стандартная 70х20х20',
      'b02': 'Высокая 70х30х20',
      'b03': 'Широкая 120х20х20',
    },
    placeholder: ['b01', 'Выбрать тумбу'],
    title: 'Тумба',
  },
  'tzvet': {
    data: {
      'c00': 'Без цветника',
      'c01': 'Цветник 100х50 10х8 из 3-х поребриков',
      'c02': 'Цветник 100х50 10х8 из 4-х поребриков',
    },
    placeholder: ['c00', 'Выбрать цветник'],
    title: 'Цветник',
  },
  'nadgrob': {
    data: {
      'd00': 'Без плиты',
      'd01': 'Стандартная',
      'd02': 'Короткая',
      'd03': 'Фигурная',
    },
    placeholder: ['d00', 'Выбрать нагробие'],
    title: 'Надгробная плита',
  },
  'pokritiye': {
    data: {
      'i02': 'Гранитная плита',
      'i03': 'Тротуарная плитка красная',
      'i04': 'Тротуарная плитка серая',
      'i05': 'Мраморная крошка',
    },
    placeholder: ['i02', 'Выбрать покрытие'],
    title: 'Покрытие',
  },
  'vaza': {
    data: {
      'j01': 'Ваза 15х15х30',
      'j02': 'Ваза 12х12х25',
    },
    placeholder: ['j00', 'Выбрать вазу'],
    title: 'Ваза',
  },
  'krest': {
    data: {
      'k00': 'Нет',
      'kg': 'Крест 1',
      'kp': 'Крест 2',
    },
    placeholder: ['k00', 'Выбрать крест'],
    title: "Кресты",
  },
  'risynki': {
    data: {
      'r00': 'Нет',
      'r01': '2 гвоздики',
      'r02': '2 розы',
      'r03': 'Свеча и 2 гвоздики',
      'r04': 'Свеча и 2 розы',
    },
    placeholder: ['r00', 'Выбрать рисункок'],
    title: "Рируснки",
  },
  'epitaph': {
    data: {
      'e00':  "Нет",
      'e01':  "1 строчка",
      'e02':  "2 строчки",
    },
    placeholder: ['e00', 'Выбрать эпитафию'],
    title: "Эпитафия",
  },
  'f_port': {
    data: {
      'p1': '1 портрет',
      'p2': '2 портрета',
      'p2_': 'Более 2-х',
    },
    placeholder: ['p0', 'Выбрать количество портретов'],
    title: "Портреты",
  },
  'f_port_material': {
    data: {
      'pmg':  "Гравировка",
      'pmk':  "Керамика",
    },
    placeholder: ['pmg', 'Выбрать материалы портретов'],
    title: "Материал портретов",
  },
  'hograda': {
    data: {
      'h01':  "Стандартная",
      'h02':  "Высокая",
      'h03':  "Низкая",
    },
    placeholder: ['h00', 'Выбрать ограду'],
    title: "Ограда",
  },
  'hogradacolor': {
    data: {
      'hc02': "Черный",
    },
    placeholder: ['hc02', 'Выбрать цвет'],
    title: "Цвет",
  },
};
let src_prefix = location.hostname === "localhost" ? 'bitrix/images/constructor.v2' : '/bitrix/images/constructor.v2';

$(function () {
  let $constructor = $('#kit');
  let $form = $('#form_send');

  for (let key in controls) {
    let options = controls[key].data;
    let placeholder = controls[key].placeholder;
    let title = controls[key].title;
    let $container = $(`[data-container="${key}"]`);

    let $select = $(`<select name="${key}"></select>`);
    $select.append(`<option value="${placeholder[0]}">${placeholder[1]}</option>`);
    for (let opt_key in options) {
      let opt_value = options[opt_key];
      $select.append(`<option value="${opt_key}">${opt_value}</option>`);
    }

    if (title !== '' && !['f_port_material', 'hogradacolor'].includes(key)) {
      $container.append(`<div class="kit_label">${title}</div>`)
    }
    $container.append($select);
  }

  $constructor.find('select').change(function () {
    let vl_port = $('[name="f_port"]').val();
    let vl_port_material = $('[name="f_port_material"]').val();
    let vl_stella = $('[name="stella"]').val();

    let name = $(this).attr('name');
    let value = $(this).val();

    value = value.replace('_','');
    vl_port = vl_port.replace('_','');
    vl_port_material = vl_port_material.replace('_','');
    vl_stella = vl_stella.replace('_','');

    switch (name) {
      case 'tumba':
        if (value === 'b02') {
          $('#stella, #risynki, #krest, #epitaph').css('top', -18);
        } else {
          $('#stella, #risynki, #krest, #epitaph').css('top', 0);
        }
        break;
      case 'tzvet':
        $('[name="nadgrob"]').val('d00').niceSelect('update');
        $('#nadgrob').find('img').attr('src', src_prefix + '/d00.png');
        break;
      case 'nadgrob':
        $('[name="tzvet"]').val('c00').niceSelect('update');
        $('#tzvet').find('img').attr('src', src_prefix + '/c00.png');
        break;
      case 'risynki':
        value = value !== 'r00' ? 'ris/' + value + vl_stella : 'ris/' + value;
        break;
      case 'hograda':
        let color = $('[name="hogradacolor"]').val();
        value = value + color;
        break;

      case 'stella':
        value = 'stella/' + value + vl_port + vl_port_material;
        $('[name="krest"]').change();
        $('[name="epitaph"]').change();
        $('[name="risynki"]').change();
        break;
      case 'krest':
        value = value !== 'k00' ? 'krest/' + value + vl_stella + vl_port : 'krest/' + value;
        break;
      case 'epitaph':
        if (value !== 'e00') {
          $('[name="epitaph_text"]').removeAttr('disabled');
          value = 'ep/' + value + vl_stella + vl_port;
        } else {
          $('[name="epitaph_text"]').attr('disabled', 'disabled').val("");
          value = 'ep/' + value;
        }
        break;

      case 'f_port':
      case 'f_port_material':
        $('[name="stella"]').change();
        break;
    }
    $('#' + name).find('img').attr('src', src_prefix + '/' + value + '.png');
  });
  $constructor.find('select').niceSelect();

  $form.submit(function (e) {
    e.preventDefault();

    let $form = $(this), data = {}, client = {};
    $.each($form.serializeArray(), function () {
      client[this.name] = this.value;
    });
    $constructor.find('input, select').each(function () {
      let name = $(this).attr('name');
      let value = $(this).val();

      let control = controls[name];
      if (control !== undefined) {
        data[control.title] = control.data[value] === undefined ? "Не выбрано" : control.data[value];
      } else {
        let id = $(this).attr('id');
        let label = $(`label[for="${id}"]`).text();
        data[ label ?? name ] = value;
      }
    });

    $.ajax({
      type: "POST",
      url: "/constructor/v2/send.php",
      data: {client: client, data: data},
      success: function () {
        $('.modal').modal('hide');
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Успешно!",
          html: "Данные отправлены, менеджер с вами скоро свяжется",
          showConfirmButton: false,
          timer: 3000
        });
      }
    });
  });
});