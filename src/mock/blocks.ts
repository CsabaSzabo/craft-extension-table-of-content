import { CraftTextBlock } from "@craftdocs/craft-extension-api";

let root : CraftTextBlock = getRoot();
export const blockWithSomeSubblockLevels: CraftTextBlock = root;

// --------------------------------------------------
// Consuction of the block
// --------------------------------------------------
function getRoot() : CraftTextBlock {
  return {
    "color": "text",
    "content": [
      {
        "isBold": false,
        "isCode": false,
        "isItalic": false,
        "isStrikethrough": false,
        "text": "Deep document structure test"
      }
    ],
    "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "id": "B18F8E8D-5EFC-44C7-BD17-85CCA61321CB",
    "indentationLevel": 0,
    "listStyle": {
      "type": "none"
    },
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "style": {
      "alignmentStyle": "left",
      "fontStyle": "system",
      "textStyle": "body"
    },
    "subblocks": getSubblocksLevel1(),
    "type": "textBlock"
  }
}

function getSubblocksLevel1() : CraftTextBlock[] {
  return [
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "H1#1 - Root"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "65A17586-81BC-4BB8-81E0-7EC16DC92D8C",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "title"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1 content text line1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "E5950F3F-136F-4E47-BF51-F288A675F45E",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "cardStyle": {
          "backgroundColor": "#FFFFFF #303436",
          "backgroundColorKey": "white",
          "isLightColor": true,
          "type": "subtle"
        },
        "coverImage": {
          "enabled": false,
          "primaryColor": "#f2f2f2"
        },
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [
        {
          "color": "text",
          "content": [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "Content line 1"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "CD3FA523-4CDE-4FCA-B46B-19328341FD25",
          "indentationLevel": 0,
          "listStyle": {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style": {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "body"
          },
          "subblocks": [],
          "type": "textBlock"
        },
        {
          "color": "text",
          "content": [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "Content line 2"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "99A2B734-5E96-425C-9665-D78762057F5E",
          "indentationLevel": 0,
          "listStyle": {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style": {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "body"
          },
          "subblocks": [],
          "type": "textBlock"
        },
        {
          "color": "text",
          "content": [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "Content line 3"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "71F9AB57-233F-49A9-A730-F5AED41CB4E0",
          "indentationLevel": 0,
          "listStyle": {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style": {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "body"
          },
          "subblocks": [],
          "type": "textBlock"
        }
      ],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1 content text line2"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "C1FDAE35-83B9-4EB6-BCAE-E42AF322D185",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "H2#1 - Root H1#1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "EE68FDB7-F743-4FBC-B47E-036CBB6A7A2D",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "subtitle"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1-H2#1 content text line1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "C79B55EA-9C82-4853-80E1-093DF6E37F22",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1-H2#1 content text line2"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "7FED32B2-B9D6-417F-A479-21A3E624A0B6",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "H3#1 - Root H1#1-H2#1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "B20B297E-D7CC-44CC-A7D3-A45D7350A3C9",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "heading"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1-H2#1-H3#1 content text line1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "DDBB5B42-6290-4508-AE00-C7E7DA85D437",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1-H2#1-H3#1 content text line2"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "AA58F3B5-1A87-4768-B306-95800D87718E",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "H3#2 - Root H1#1-H2#1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "A402CF1A-648B-48AE-8ED0-E0D3CC056A78",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "heading"
      },
      "subblocks": [
        {
          "color": "text",
          "content": [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "contnet"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "0B617644-DD34-4D49-B239-E812AE876040",
          "indentationLevel": 0,
          "listStyle": {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style": {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "body"
          },
          "subblocks": [],
          "type": "textBlock"
        },
        {
          "color": "text",
          "content": [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "h1 subpage item long text long text"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "49CFF080-3F9A-4AD7-8C8C-D9330E364734",
          "indentationLevel": 0,
          "listStyle": {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style": {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "title"
          },
          "subblocks": [],
          "type": "textBlock"
        },
        {
          "color": "text",
          "content": [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "h2 subpage item"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "C06330E6-7320-40A8-9971-5079FA973D83",
          "indentationLevel": 0,
          "listStyle": {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style": {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "subtitle"
          },
          "subblocks": [],
          "type": "textBlock"
        }
      ],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1-H2#1-H3#2 content text line1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "363987AF-31CD-4998-A6E8-8335B2D8D23C",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root H1#1-H2#1-H3#2 content text line2"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "2BB8BF15-F851-42F3-9B96-898868493F79",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "6998C32A-8142-4C15-8A1F-842AC2D16B99",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks": [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root - level1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "2FA749B4-1BC7-426F-A2DE-F288A55778B3",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "coverImage": {
          "enabled": false,
          "primaryColor": "#f2f2f2"
        },
        "fontStyle": "system",
        "textStyle": "page"
      },
      "subblocks": getSubblocksLevel2(),
      "type": "textBlock"
    }
  ]
}

function getSubblocksLevel2() : CraftTextBlock[] {
  return [
    {
      "color": "text",
      "content": [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root - level2"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "CF03794D-5597-4C76-BF46-A164BDF79736",
      "indentationLevel": 0,
      "listStyle": {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style": {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "page"
      },
      "subblocks": getSubblocksLevel3(),
      "type": "textBlock"
    }
  ] 
}

function getSubblocksLevel3() : CraftTextBlock[] {
  return [
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Root - level3"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "7852FF09-595D-4450-AA7E-BF54C42992E4",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "coverImage":
        {
          "enabled": false,
          "primaryColor": "#f2f2f2"
        },
        "fontStyle": "system",
        "textStyle": "page"
      },
      "subblocks": getSubblocksLevel4(),
      "type": "textBlock"
  },
  {
    "color": "text",
    "content":
    [
      {
        "isBold": false,
        "isCode": false,
        "isItalic": false,
        "isStrikethrough": false,
        "text": "Level2 - h2"
      }
    ],
    "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "id": "07C83FAB-4A4B-4123-8248-9552E6B9A563",
    "indentationLevel": 0,
    "listStyle":
    {
      "type": "none"
    },
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "style":
    {
      "alignmentStyle": "left",
      "fontStyle": "system",
      "textStyle": "subtitle"
    },
    "subblocks": [],
    "type": "textBlock"
  },
  {
    "color": "text",
    "content":
    [
      {
        "isBold": false,
        "isCode": false,
        "isItalic": false,
        "isStrikethrough": false,
        "text": "contnet"
      }
    ],
    "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "id": "16083110-0BA0-42AD-92DC-53A58402BFD7",
    "indentationLevel": 0,
    "listStyle":
    {
      "type": "none"
    },
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "style":
    {
      "alignmentStyle": "left",
      "fontStyle": "system",
      "textStyle": "body"
    },
    "subblocks": [],
    "type": "textBlock"
  }]
}

function getSubblocksLevel4() : CraftTextBlock[] {
  return [
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Level4level4"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "4D966A93-7E6F-455C-A2CB-78124C02DCB5",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "page"
      },
      "subblocks": getSubblocksLevel5(),
      "type": "textBlock"
    }
  ]
}

function getSubblocksLevel5() : CraftTextBlock[] {
  return [
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Level5level5"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "62BD0A60-3AF6-4E21-8005-4A858CFB0D1D",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "page"
      },
      "subblocks": getSubblocksLevel6(),
      "type": "textBlock"
    }
  ]
}

function getSubblocksLevel6() : CraftTextBlock[] {
  return [
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Level13level13"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "A69ACE07-37D2-404F-B786-6C01F401DBCF",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "page"
      },
      "subblocks":
      [
        {
          "color": "text",
          "content":
          [
            {
              "isBold": false,
              "isCode": false,
              "isItalic": false,
              "isStrikethrough": false,
              "text": "Level14level14"
            }
          ],
          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
          "hasBlockDecoration": false,
          "hasFocusDecoration": false,
          "id": "50EB2DC8-4B62-436A-8922-8333BE93AACB",
          "indentationLevel": 0,
          "listStyle":
          {
            "type": "none"
          },
          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
          "style":
          {
            "alignmentStyle": "left",
            "fontStyle": "system",
            "textStyle": "page"
          },
          "subblocks":
          [
            {
              "color": "text",
              "content":
              [
                {
                  "isBold": false,
                  "isCode": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "text": "Level15level15"
                }
              ],
              "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "id": "C147EC1B-A991-4561-986E-6D8A80E5C61A",
              "indentationLevel": 0,
              "listStyle":
              {
                "type": "none"
              },
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "style":
              {
                "alignmentStyle": "left",
                "fontStyle": "system",
                "textStyle": "page"
              },
              "subblocks":
              [
                {
                  "color": "text",
                  "content":
                  [
                    {
                      "isBold": false,
                      "isCode": false,
                      "isItalic": false,
                      "isStrikethrough": false,
                      "text": "Level16level16"
                    }
                  ],
                  "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                  "hasBlockDecoration": false,
                  "hasFocusDecoration": false,
                  "id": "9AE6946F-CBFB-40E3-A864-13C3FA748ED9",
                  "indentationLevel": 0,
                  "listStyle":
                  {
                    "type": "none"
                  },
                  "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                  "style":
                  {
                    "alignmentStyle": "left",
                    "fontStyle": "system",
                    "textStyle": "page"
                  },
                  "subblocks":
                  [
                    {
                      "color": "text",
                      "content":
                      [
                        {
                          "isBold": false,
                          "isCode": false,
                          "isItalic": false,
                          "isStrikethrough": false,
                          "text": "Level17level17"
                        }
                      ],
                      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                      "hasBlockDecoration": false,
                      "hasFocusDecoration": false,
                      "id": "9AFB85BF-9749-4DDD-A68A-E61D8F02AA4A",
                      "indentationLevel": 0,
                      "listStyle":
                      {
                        "type": "none"
                      },
                      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                      "style":
                      {
                        "alignmentStyle": "left",
                        "fontStyle": "system",
                        "textStyle": "page"
                      },
                      "subblocks":
                      [
                        {
                          "color": "text",
                          "content":
                          [
                            {
                              "isBold": false,
                              "isCode": false,
                              "isItalic": false,
                              "isStrikethrough": false,
                              "text": "Level18level18"
                            }
                          ],
                          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                          "hasBlockDecoration": false,
                          "hasFocusDecoration": false,
                          "id": "0F9885E7-AFC3-4789-BEFC-E9E59ED49F20",
                          "indentationLevel": 0,
                          "listStyle":
                          {
                            "type": "none"
                          },
                          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                          "style":
                          {
                            "alignmentStyle": "left",
                            "fontStyle": "system",
                            "textStyle": "page"
                          },
                          "subblocks":
                          [
                            {
                              "color": "text",
                              "content":
                              [
                                {
                                  "isBold": false,
                                  "isCode": false,
                                  "isItalic": false,
                                  "isStrikethrough": false,
                                  "text": "Level19level19"
                                }
                              ],
                              "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                              "hasBlockDecoration": false,
                              "hasFocusDecoration": false,
                              "id": "811F34AA-1CC6-4C9A-86E9-BD5AF1A10C62",
                              "indentationLevel": 0,
                              "listStyle":
                              {
                                "type": "none"
                              },
                              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                              "style":
                              {
                                "alignmentStyle": "left",
                                "fontStyle": "system",
                                "textStyle": "page"
                              },
                              "subblocks":
                              [
                                {
                                  "color": "text",
                                  "content":
                                  [
                                    {
                                      "isBold": false,
                                      "isCode": false,
                                      "isItalic": false,
                                      "isStrikethrough": false,
                                      "text": "Level20level20"
                                    }
                                  ],
                                  "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                                  "hasBlockDecoration": false,
                                  "hasFocusDecoration": false,
                                  "id": "6F313834-7F53-41FE-95A6-683E07B1F3A3",
                                  "indentationLevel": 0,
                                  "listStyle":
                                  {
                                    "type": "none"
                                  },
                                  "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                                  "style":
                                  {
                                    "alignmentStyle": "left",
                                    "fontStyle": "system",
                                    "textStyle": "page"
                                  },
                                  "subblocks":
                                  [
                                    {
                                      "color": "text",
                                      "content":
                                      [
                                        {
                                          "isBold": false,
                                          "isCode": false,
                                          "isItalic": false,
                                          "isStrikethrough": false,
                                          "text": "H1 textlevel21"
                                        }
                                      ],
                                      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                                      "hasBlockDecoration": false,
                                      "hasFocusDecoration": false,
                                      "id": "DAE2A5C1-D197-491E-9A35-AA47D963D30A",
                                      "indentationLevel": 0,
                                      "listStyle":
                                      {
                                        "type": "none"
                                      },
                                      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                                      "style":
                                      {
                                        "alignmentStyle": "left",
                                        "fontStyle": "system",
                                        "textStyle": "page"
                                      },
                                      "subblocks":
                                      [
                                        {
                                          "color": "text",
                                          "content":
                                          [
                                            {
                                              "isBold": false,
                                              "isCode": false,
                                              "isItalic": false,
                                              "isStrikethrough": false,
                                              "text": "level22"
                                            }
                                          ],
                                          "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                                          "hasBlockDecoration": false,
                                          "hasFocusDecoration": false,
                                          "id": "00B90514-ABB5-4DE3-9878-E299EBFFF344",
                                          "indentationLevel": 0,
                                          "listStyle":
                                          {
                                            "type": "none"
                                          },
                                          "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                                          "style":
                                          {
                                            "alignmentStyle": "left",
                                            "fontStyle": "system",
                                            "textStyle": "page"
                                          },
                                          "subblocks":
                                          [
                                            {
                                              "color": "text",
                                              "content":
                                              [
                                                {
                                                  "isBold": false,
                                                  "isCode": false,
                                                  "isItalic": false,
                                                  "isStrikethrough": false,
                                                  "text": "level23"
                                                }
                                              ],
                                              "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                                              "hasBlockDecoration": false,
                                              "hasFocusDecoration": false,
                                              "id": "1AB0C845-9B2C-4E37-9D7D-7A3109C97667",
                                              "indentationLevel": 0,
                                              "listStyle":
                                              {
                                                "type": "none"
                                              },
                                              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                                              "style":
                                              {
                                                "alignmentStyle": "left",
                                                "fontStyle": "system",
                                                "textStyle": "page"
                                              },
                                              "subblocks":
                                              [
                                                {
                                                  "color": "text",
                                                  "content":
                                                  [
                                                    {
                                                      "isBold": false,
                                                      "isCode": false,
                                                      "isItalic": false,
                                                      "isStrikethrough": false,
                                                      "text": "level24"
                                                    }
                                                  ],
                                                  "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                                                  "hasBlockDecoration": false,
                                                  "hasFocusDecoration": false,
                                                  "id": "B9916B97-7060-4D14-A894-1639C0B556D2",
                                                  "indentationLevel": 0,
                                                  "listStyle":
                                                  {
                                                    "type": "none"
                                                  },
                                                  "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                                                  "style":
                                                  {
                                                    "alignmentStyle": "left",
                                                    "fontStyle": "system",
                                                    "textStyle": "body"
                                                  },
                                                  "subblocks":
                                                  [],
                                                  "type": "textBlock"
                                                }
                                              ],
                                              "type": "textBlock"
                                            }
                                          ],
                                          "type": "textBlock"
                                        }
                                      ],
                                      "type": "textBlock"
                                    },
                                    {
                                      "color": "text",
                                      "content":
                                      [],
                                      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
                                      "hasBlockDecoration": false,
                                      "hasFocusDecoration": false,
                                      "id": "9934E88B-E76F-41E4-841C-7818154F56AE",
                                      "indentationLevel": 0,
                                      "listStyle":
                                      {
                                        "type": "none"
                                      },
                                      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
                                      "style":
                                      {
                                        "alignmentStyle": "left",
                                        "fontStyle": "system",
                                        "textStyle": "body"
                                      },
                                      "subblocks":
                                      [],
                                      "type": "textBlock"
                                    }
                                  ],
                                  "type": "textBlock"
                                }
                              ],
                              "type": "textBlock"
                            }
                          ],
                          "type": "textBlock"
                        }
                      ],
                      "type": "textBlock"
                    }
                  ],
                  "type": "textBlock"
                }
              ],
              "type": "textBlock"
            }
          ],
          "type": "textBlock"
        }
      ],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Level6 H1"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "9CE68D39-5126-4820-9B43-6961EF939534",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "title"
      },
      "subblocks":
      [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "content"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "C9AE6F36-FF0C-4AB9-99A5-AAD3C7DBAEBE",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks":
      [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Level6 H2"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "8DDB7743-85AB-48B5-8671-60F248B016A0",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "subtitle"
      },
      "subblocks":
      [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "content"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "9E830F6A-D46C-474D-AE45-BE30548B2CFE",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks":
      [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "Level6 h3"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "DC04AC7E-7984-4829-A281-843485AE08F7",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "heading"
      },
      "subblocks":
      [],
      "type": "textBlock"
    },
    {
      "color": "text",
      "content":
      [
        {
          "isBold": false,
          "isCode": false,
          "isItalic": false,
          "isStrikethrough": false,
          "text": "content"
        }
      ],
      "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
      "hasBlockDecoration": false,
      "hasFocusDecoration": false,
      "id": "D6DDCDF7-A2F0-4659-BC59-7EB487A0935E",
      "indentationLevel": 0,
      "listStyle":
      {
        "type": "none"
      },
      "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
      "style":
      {
        "alignmentStyle": "left",
        "fontStyle": "system",
        "textStyle": "body"
      },
      "subblocks":
      [],
      "type": "textBlock"
    }
  ]
}
