export async function GET() {
  const content = `# AtomicHabitsWorld 每天一點點
> 專注法律知識與日常成長的個人品牌網站，涵蓋勞動法、保險法、民法等法律實務，以及日常學習與生活智慧。

## 法律
- [勞動社會法](https://atomichabitsworld.com/law/labor)
- [保險法](https://atomichabitsworld.com/law/insurance)
- [民法](https://atomichabitsworld.com/law/civil)
- [行政法](https://atomichabitsworld.com/law/administrative)
- [刑法](https://atomichabitsworld.com/law/criminal)
- [民事訴訟法](https://atomichabitsworld.com/law/civil-procedure)

## 日常
- [讀書](https://atomichabitsworld.com/daily/study)
- [考試](https://atomichabitsworld.com/daily/exam)
- [隨筆](https://atomichabitsworld.com/daily/essay)
- [生活智慧王](https://atomichabitsworld.com/daily/life-wisdom)
- [左手訓練](https://atomichabitsworld.com/daily/left-hand-writing)

## 關於
- [創辦人的理念與故事](https://atomichabitsworld.com/daily/founder-story)
- [隱私權政策](https://atomichabitsworld.com/privacy)
- [服務條款](https://atomichabitsworld.com/terms)
`
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
