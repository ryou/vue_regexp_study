export default {
  match: [
    {
      title: '文字のマッチング',
      question: '「県」の文字が入っている文字列のみを抽出する正規表現を入力してください。',
      samples: [
        '大阪府',
        '長崎県',
        '東京都',
        '和歌山県',
      ],
      results: [
        '長崎県',
        '和歌山県',
      ],
      examples: [
        '県',
      ],
    },
    {
      title: '文字列のマッチング',
      question: '「グレン」の文字が入っている文字列のみを抽出する正規表現を入力してください。',
      samples: [
        'グレンフィディック',
        'マッカラン',
        'グレンリベット',
        'ボウモア',
      ],
      results: [
        'グレンフィディック',
        'グレンリベット',
      ],
      examples: [
        'グレン',
      ],
    },
    {
      title: '行頭のマッチング',
      question: '「山田」の文字から始まる文字列のみを抽出する正規表現を入力してください。',
      samples: [
        '山田花子',
        '小山田壮平',
        '山田孝之',
      ],
      results: [
        '山田花子',
        '山田孝之',
      ],
      examples: [
        '^山田',
      ],
    },
    {
      title: '行末のマッチング',
      question: '「子」の文字で終わる文字列のみを抽出する正規表現を入力してください。',
      samples: [
        '山田花子',
        '子安武人',
        '泉ピン子',
      ],
      results: [
        '山田花子',
        '泉ピン子',
      ],
      examples: [
        '子$',
      ],
    },
    {
      title: '特殊文字マッチング',
      question: '「$」を含む文字列のみを抽出する正規表現を入力してください。',
      samples: [
        '$1.2',
        '120円',
        '$100',
        '€1.5',
      ],
      results: [
        '$1.2',
        '$100',
      ],
      examples: [
        '\\$',
      ],
    },
    {
      title: 'どれかにマッチング',
      question: '拡張子が「.jpg」「.png」ファイルのみを抽出する正規表現を入力してください。',
      samples: [
        'img_photo.jpg',
        'compress_jpg.exe',
        'icn_person.png',
        'main.js',
      ],
      results: [
        'img_photo.jpg',
        'icn_person.png',
      ],
      examples: [
        '\\.(png|jpg)$',
      ],
    },
  ],
};
