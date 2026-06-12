import { HistoryItem, StoryNode } from "./types";
import { hasOption } from "./utils";

export const story5: Record<string, StoryNode> = {
  "chapter_5_1": {
    id: "chapter_5_1",
    title: "第五章　之后",
    text: [
      "读完，我合上书，搁回床头。日记里只写了一行：\"今天看书了。\"",
      "然后我翻开新的一页，写：\"手术，下周三。\"",
      "停了很久。",
      "然后写：\"我感到——\"",
      "然后划掉了。",
      "________________________________________",
      "1954年一月以后",
      "手术在下周三。",
      "手术在下周三做了。",
      "________________________________________",
      "今天吃了早饭。天冷。"
    ],
    options: [
      {
        id: "5-1-a",
        label: "▷ A. 午饭是土豆泥，我吃了。",
        resultText: [
          "我吃了。我睡了。今天冷。我想写点什么，可不知道写什么。日子是平的，一天和一天之间，我分不出来了。我记得我从前是会写字的，写很长的，写玫瑰，写一个人的手，写一种气味。现在我写\"今天冷\"。这也是写。"
        ],
        nextId: "chapter_5_2"
      },
      {
        id: "5-1-b",
        label: "▷ B. 午饭之后我睡了。",
        resultText: [
          "我吃了。我睡了。今天冷。我想写点什么，可不知道写什么。日子是平的，一天和一天之间，我分不出来了。我记得我从前是会写字的，写很长的，写玫瑰，写一个人的手，写一种气味。现在我写\"今天冷\"。这也是写。"
        ],
        nextId: "chapter_5_2"
      },
      {
        id: "5-1-c",
        label: "▷ C. 今天冷，窗户那边是冷的。",
        resultText: [
          "我吃了。我睡了。今天冷。我想写点什么，可不知道写什么。日子是平的，一天和一天之间，我分不出来了。我记得我从前是会写字的，写很长的，写玫瑰，写一个人的手，写一种气味。现在我写\"今天冷\"。这也是写。"
        ],
        nextId: "chapter_5_2"
      },
      {
        id: "5-1-d",
        label: "▷ D. 我想写点什么。",
        resultText: [
          "我吃了。我睡了。今天冷。我想写点什么，可不知道写什么。日子是平的，一天和一天之间，我分不出来了。我记得我从前是会写字的，写很长的，写玫瑰，写一个人的手，写一种气味。现在我写\"今天冷\"。这也是写。"
        ],
        nextId: "chapter_5_2"
      }
    ]
  },
  "chapter_5_2": {
    id: "chapter_5_2",
    text: [
      "今天午饭是面包和汤。我先喝了汤。"
    ],
    options: [
      {
        id: "5-2-a",
        label: "▷ A. 我躺下了。",
        resultText: [
          "我躺下了。眼睛闭上，后来又睁开。有人来过，穿白的，给我一个杯子，我喝了。杯子里是甜的。或者不甜。我尝不准了。我记得\"尝不准\"这件事我以前写过，写在哪一天，我翻不到了，纸太多了，或者太少了。"
        ],
        nextId: "chapter_5_3"
      },
      {
        id: "5-2-b",
        label: "▷ B. 上厕所了。两回。或者三回。",
        resultText: [
          "我躺下了。眼睛闭上，后来又睁开。有人来过，穿白的，给我一个杯子，我喝了。杯子里是甜的。或者不甜。我尝不准了。我记得\"尝不准\"这件事我以前写过，写在哪一天，我翻不到了，纸太多了，或者太少了。"
        ],
        nextId: "chapter_5_3"
      },
      {
        id: "5-2-c",
        label: "▷ C. 阳光在地板上。是一个四方块。后来没了。",
        resultText: [
          "我躺下了。眼睛闭上，后来又睁开。有人来过，穿白的，给我一个杯子，我喝了。杯子里是甜的。或者不甜。我尝不准了。我记得\"尝不准\"这件事我以前写过，写在哪一天，我翻不到了，纸太多了，或者太少了。"
        ],
        nextId: "chapter_5_3"
      },
      {
        id: "5-2-d",
        label: "▷ D. 我躺下了。",
        resultText: [
          "我躺下了。眼睛闭上，后来又睁开。有人来过，穿白的，给我一个杯子，我喝了。杯子里是甜的。或者不甜。我尝不准了。我记得\"尝不准\"这件事我以前写过，写在哪一天，我翻不到了，纸太多了，或者太少了。"
        ],
        nextId: "chapter_5_3"
      }
    ]
  },
  "chapter_5_3": {
    id: "chapter_5_3",
    text: [
      "今天冷。"
    ],
    options: [
      {
        id: "5-3-a",
        label: "▷ A. 吃。",
        resultText: ["吃。睡。冷。"],
        nextId: "chapter_5_4"
      },
      {
        id: "5-3-b",
        label: "▷ B. 睡。",
        resultText: ["吃。睡。冷。"],
        nextId: "chapter_5_4"
      },
      {
        id: "5-3-c",
        label: "▷ C. 冷。",
        resultText: ["吃。睡。冷。"],
        nextId: "chapter_5_4"
      }
    ]
  },
  "chapter_5_4": {
    id: "chapter_5_4",
    text: [
      "今天冷。今天吃了。今天睡了。"
    ],
    options: [
      {
        id: "5-4-a",
        label: "▷ A. 吃。",
        resultText: [
          "吃。睡。冷。",
          "有人说话。我点头了。我点头是因为别人点头的时候事情会变简单。我不记得\"简单\"是不是一个好的东西。我不记得\"好\"。"
        ],
        nextId: "chapter_5_5_1"
      },
      {
        id: "5-4-b",
        label: "▷ B. 睡。",
        resultText: [
          "吃。睡。冷。",
          "有人说话。我点头了。我点头是因为别人点头的时候事情会变简单。我不记得\"简单\"是不是一个好的东西。我不记得\"好\"。"
        ],
        nextId: "chapter_5_5_1"
      },
      {
        id: "5-4-c",
        label: "▷ C. 冷。",
        resultText: [
          "吃。睡。冷。",
          "有人说话。我点头了。我点头是因为别人点头的时候事情会变简单。我不记得\"简单\"是不是一个好的东西。我不记得\"好\"。"
        ],
        nextId: "chapter_5_5_1"
      }
    ]
  },
  "chapter_5_5_1": {
    id: "chapter_5_5_1",
    text: [],
    options: [
      { id: "5-5-1-a", label: "▷ A. 吃。", resultText: ["吃。"], nextId: "chapter_5_5_2" },
      { id: "5-5-1-b", label: "▷ B. 吃。", resultText: ["吃。"], nextId: "chapter_5_5_2" },
      { id: "5-5-1-c", label: "▷ C. 吃。", resultText: ["吃。"], nextId: "chapter_5_5_2" }
    ]
  },
  "chapter_5_5_2": {
    id: "chapter_5_5_2",
    text: [],
    options: [
      { id: "5-5-2-a", label: "▷ A. 吃。", resultText: ["吃。"], nextId: "chapter_5_5_3" },
      { id: "5-5-2-b", label: "▷ B. 吃。", resultText: ["吃。"], nextId: "chapter_5_5_3" },
      { id: "5-5-2-c", label: "▷ C. 吃。", resultText: ["吃。"], nextId: "chapter_5_5_3" }
    ]
  },
  "chapter_5_5_3": {
    id: "chapter_5_5_3",
    text: [],
    options: [
      { id: "5-5-3-a", label: "▷ A. 睡。", resultText: ["睡。"], nextId: "chapter_5_5_4" },
      { id: "5-5-3-b", label: "▷ B. 睡。", resultText: ["睡。"], nextId: "chapter_5_5_4" },
      { id: "5-5-3-c", label: "▷ C. 睡。", resultText: ["睡。"], nextId: "chapter_5_5_4" }
    ]
  },
  "chapter_5_5_4": {
    id: "chapter_5_5_4",
    text: [],
    options: [
      { id: "5-5-4-a", label: "▷ A. 睡。", resultText: ["睡。"], nextId: "chapter_5_5_5" },
      { id: "5-5-4-b", label: "▷ B. 睡。", resultText: ["睡。"], nextId: "chapter_5_5_5" },
      { id: "5-5-4-c", label: "▷ C. 睡。", resultText: ["睡。"], nextId: "chapter_5_5_5" }
    ]
  },
  "chapter_5_5_5": {
    id: "chapter_5_5_5",
    text: [],
    options: [
      { id: "5-5-5-a", label: "▷ A. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_6" },
      { id: "5-5-5-b", label: "▷ B. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_6" },
      { id: "5-5-5-c", label: "▷ C. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_6" }
    ]
  },
  "chapter_5_5_6": {
    id: "chapter_5_5_6",
    text: [],
    options: [
      { id: "5-5-6-a", label: "▷ A. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_7" },
      { id: "5-5-6-b", label: "▷ B. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_7" },
      { id: "5-5-6-c", label: "▷ C. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_7" }
    ]
  },
  "chapter_5_5_7": {
    id: "chapter_5_5_7",
    text: [],
    options: [
      { id: "5-5-7-a", label: "▷ A. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_8" },
      { id: "5-5-7-b", label: "▷ B. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_8" },
      { id: "5-5-7-c", label: "▷ C. 冷。", resultText: ["冷。"], nextId: "chapter_5_5_8" }
    ]
  },
  "chapter_5_5_8": {
    id: "chapter_5_5_8",
    text: [],
    options: [
      { id: "5-5-8-a", label: "▷ A. 冷。", resultText: ["冷。"], nextId: "chapter_5_final" },
      { id: "5-5-8-b", label: "▷ B. 冷。", resultText: ["冷。"], nextId: "chapter_5_final" }
    ]
  },
  "chapter_5_final": {
    id: "chapter_5_final",
    text: [
      "吃。",
      "吃。",
      "吃。",
      "睡。",
      "睡。",
      "睡。",
      "冷。",
      "冷。",
      "冷。",
      "吃。睡。冷。",
      "吃。睡。冷。",
      "吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷",
      "吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷",
      "吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷吃睡冷",
      "冷。",
      "冷。",
      "冷。",
      "冷。",
      "冷。",
      "冷。",
      "冷。",
      "________________________________________",
      "日记的纸用完了。最后是一页空白。",
      "[IMAGE:/5.png]"
    ],
    options: [
      {
        id: "5-end-a",
        label: "▷ 合上日记。",
        resultText: [
            "日记到此结束。"
        ],
        nextId: "report_discharge"
      },
      {
        id: "5-end-b",
        label: "▷ 接着翻。",
        resultText: [
          "空白。",
          "空白。",
          "空白。",
          "空白。",
          "没有更多页了。这是本子最后一页。",
          "那些他本来要写的，那些将落未落的、悬在那一寸里的东西，没有写下来。不是被谁拿走了。是到了该写的时候，那只手已经不记得，自己曾经会写字。",
          "空白。",
          "—— 全剧终 ——"
        ],
        nextId: "end"
      }
    ]
  },
  "report_discharge": {
    id: "report_discharge",
    text: (history: HistoryItem[]) => {
      const res = [
        "【此份报告夹在日记最后的封底】",
        "格林布鲁克精神康复医院 · 出院评估报告",
        "患者：爱德华·班克斯　　入院日期：1953年9月7日　　手术日期：1954年1月14日",
        "评估：患者情绪稳定，配合治疗，饮食睡眠规律，无攻击性，社交能力符合出院标准。恢复良好。",
        "主治医师：R. 凯文斯"
      ];
      if (hasOption(history, "3-2-e") && hasOption(history, "4-4")) {
        res.push("家属探视记录：母亲于1954年1月20日来访，称\"他看着比从前好多了\"。");
      }
      return res;
    },
    options: [
      {
        id: "5-end-report",
        label: "▷ 结束",
        resultText: ["—— 全剧终 ——"],
        nextId: "end"
      }
    ]
  }
};
