## 複数のコミットに分割するケース

大きな変更を複数のコミットに分割する場合は、以下のフォーマットに従ってください。  
各コミットごとに「コミットメッセージ」と「git add コマンド」をセットで示します。

````
## 1. １つ目のコミット

```text
[docs] 📝 コミットメッセージフォーマットを更新
- Prefix一覧に[test]を追加
- 絵文字使用ルールとSubject/Descriptionガイドを見直し
```

```bash
git add rules/commit-message/001_format.md rules/commit-message/002_prefix.md rules/commit-message/003_emoji.md rules/commit-message/004_subject.md rules/commit-message/005_description.md rules/commit-message/007_split.md
```
````
