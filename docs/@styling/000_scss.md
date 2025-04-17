## SCSSの使用ガイドライン

本プロジェクトでは、SCSSを使用してスタイリングを行います。このセクションでは、SCSSの使用に関するルールとベストプラクティスを説明します。

### ファイル構造

SCSSファイルは以下の構造で整理します：

```
src/styles/
├── global/               # グローバルスタイル
│   ├── _reset.scss       # リセットスタイル
│   ├── _variables.scss   # 変数定義
│   ├── _typography.scss  # タイポグラフィ
│   └── _utilities.scss   # ユーティリティクラス
├── components/           # コンポーネント固有のスタイル
│   ├── _button.scss
│   ├── _card.scss
│   └── ...
├── layouts/              # レイアウト関連のスタイル
│   ├── _grid.scss
│   ├── _container.scss
│   └── ...
└── main.scss             # すべてのスタイルをインポートするエントリーポイント
```

コンポーネント固有のスタイルは、コンポーネントと同じディレクトリに配置することも可能です。

### 変数の命名規則

変数名はハイフン区切りの小文字（kebab-case）で記述し、カテゴリごとにプレフィックスを付けます：

```scss
// 色
--color-primary: #3b82f6;
--color-secondary: #10b981;
--color-background: #f3f4f6;
--color-text: #1f2937;

// フォント
--font-family-base: "Inter", sans-serif;
--font-size-base: 1rem;
--font-weight-normal: 400;
--font-weight-bold: 700;

// スペーシング
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;

// ブレイクポイント
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### ミックスインと関数

再利用可能なスタイルはミックスインとして定義し、計算や変換が必要な場合は関数を使用します：

```scss
// ミックスインの例：フレックスボックスセンタリング
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// ミックスインの例：メディアクエリ
@mixin media-breakpoint-up($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// 関数の例：rem変換
@function rem($pixels) {
  @return ($pixels / 16) * 1rem;
}
```

### ネスティングのルール

ネスティングは最大3レベルまでに制限し、セレクタの複雑さを抑えます：

```scss
// 良い例
.card {
  padding: $spacing-md;

  &__header {
    margin-bottom: $spacing-sm;

    h2 {
      color: $color-primary;
    }
  }

  &__body {
    line-height: 1.5;
  }
}

// 避けるべき例（深すぎるネスト）
.card {
  .header {
    .title {
      span {
        a {
          &:hover {
            // 深すぎるネスト
          }
        }
      }
    }
  }
}
```

### インポートの順序

SCSSファイルをインポートする際は、以下の順序に従ってください：

1. 変数、関数、ミックスイン
2. リセットとベーススタイル
3. レイアウト
4. コンポーネント
5. ユーティリティ

```scss
// main.scss
// 1. 変数、関数、ミックスイン
@import "global/variables";
@import "global/functions";
@import "global/mixins";

// 2. リセットとベーススタイル
@import "global/reset";
@import "global/typography";

// 3. レイアウト
@import "layouts/grid";
@import "layouts/container";

// 4. コンポーネント
@import "components/button";
@import "components/card";
@import "components/modal";

// 5. ユーティリティ
@import "global/utilities";
```

### メディアクエリの使用

メディアクエリは一貫性を保つために、定義済みのブレイクポイント変数とミックスインを使用します：

```scss
.card {
  width: 100%;

  @include media-breakpoint-up($breakpoint-md) {
    width: 50%;
  }

  @include media-breakpoint-up($breakpoint-lg) {
    width: 33.333%;
  }
}
```

### カラーシステム

色は直接指定せず、必ず変数を使用します。また、カラーパレットは一貫性を保つように設計します：

```scss
// 基本色
--color-primary: #3b82f6;
--color-primary-light: lighten($color-primary, 15%);
--color-primary-dark: darken($color-primary, 15%);

// 意味付けられた色
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

### パフォーマンス考慮事項

- 過度に複雑なセレクタは避け、CSSのパフォーマンスに配慮してください
- 不要なネスティングを避け、セレクタの深さを最小限に保ちます
- 大規模なCSSアニメーションは`will-change`プロパティを適切に使用して最適化します
