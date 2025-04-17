## CSSクラス命名規則

Stream Utilityプロジェクトでは、一貫性と保守性を確保するために、以下のCSSクラス命名規則を採用しています。

### BEM (Block, Element, Modifier) メソドロジー

基本的にBEMメソドロジーに基づいたクラス命名規則を使用します。BEMは以下の要素で構成されます：

- **Block**: 独立したコンポーネントを表します
- **Element**: Blockの一部で、Blockから切り離して存在できないものを表します
- **Modifier**: BlockまたはElementの状態やバリエーションを表します

#### 構文

```
.block
.block__element
.block--modifier
.block__element--modifier
```

#### 例

```html
<div class="card">
  <div class="card__header">
    <h2 class="card__title">カードタイトル</h2>
  </div>
  <div class="card__body">
    <p class="card__text">カードの内容</p>
  </div>
  <div class="card__footer">
    <button class="card__button card__button--primary">確認</button>
    <button class="card__button card__button--secondary">キャンセル</button>
  </div>
</div>
```

```scss
.card {
  border: 1px solid $color-border;
  border-radius: $border-radius;
  
  &__header {
    padding: $spacing-md;
    border-bottom: 1px solid $color-border;
  }
  
  &__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }
  
  &__body {
    padding: $spacing-md;
  }
  
  &__text {
    line-height: 1.5;
  }
  
  &__footer {
    padding: $spacing-md;
    border-top: 1px solid $color-border;
    display: flex;
    justify-content: flex-end;
    gap: $spacing-sm;
  }
  
  &__button {
    padding: $spacing-sm $spacing-md;
    border-radius: $border-radius-sm;
    
    &--primary {
      background-color: $color-primary;
      color: white;
    }
    
    &--secondary {
      background-color: transparent;
      border: 1px solid $color-primary;
      color: $color-primary;
    }
  }
}
```

### 命名のプレフィックス

特定の役割や特性を持つクラスには、以下のプレフィックスを使用します：

- **js-**: JavaScriptから参照される要素。スタイリングには使用しません
  ```html
  <button class="card__button js-submit-form">送信</button>
  ```

- **is-**, **has-**: 状態を表すクラス
  ```html
  <div class="dropdown is-open">...</div>
  <div class="notification-bell has-notifications">...</div>
  ```

- **u-**: ユーティリティクラス
  ```html
  <div class="u-text-center">中央揃えのテキスト</div>
  <div class="u-mt-lg">上部に大きなマージン</div>
  ```

- **l-**: レイアウト関連のクラス
  ```html
  <div class="l-container">
    <div class="l-sidebar">...</div>
    <div class="l-main">...</div>
  </div>
  ```

### ユーティリティクラスの命名

ユーティリティクラスは、一貫した命名パターンに従います：

```
u-{プロパティ}-{値}
```

例：
- `u-text-center`: テキストを中央揃えにする
- `u-mt-lg`: 上部に大きなマージンを適用する
- `u-flex`: flexレイアウトを適用する
- `u-hidden`: 要素を非表示にする

### コンポーネント名の命名規則

コンポーネント（Block）の命名には、以下のガイドラインに従います：

1. **明確で説明的な名前**: 見ただけで何を表しているか理解できる名前にする
2. **単語の区切り**: ハイフンで単語を区切る（BEMの慣習に従う）
3. **名詞または名詞句**: コンポーネントは基本的に名詞または名詞句で表現する

例：
- `card`
- `user-profile`
- `clip-player`
- `notification-toast`
- `settings-panel`

### アンチパターン

以下の命名方法は避けてください：

- **短すぎる略語**: `btn`, `txt` などの過度な省略
- **見た目に基づく命名**: `blue-box`, `left-column` など
- **命名の不一致**: 同じ概念に対して異なる命名を使用する（`btn` と `button` を混在させるなど）
- **グローバルな汎用名**: `container`, `wrapper`, `item` などの単独での使用
- **セレクタのネスト依存**: クラス名だけでは要素の役割が理解できないケース

### 命名のスコープ

OBSオーバーレイなど、特定の機能領域のスタイルは、接頭辞でスコープを明確にすることを推奨します：

```html
<div class="overlay">
  <div class="overlay__clip">
    <div class="overlay__clip-title">...</div>
    <div class="overlay__clip-player">...</div>
  </div>
</div>
```

これにより、機能ごとのスタイルの分離と管理が容易になります。 
