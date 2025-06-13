# README.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このプロジェクトは@grafana/scenesライブラリを使用したGrafanaシーンアプリケーションのサンプルです。OpenAI Codexのサンプルコード（sample001）として作成されており、Grafanaの公式ドキュメントの「Hello World」シーンを実装しています。

## 開発コマンド

```bash
# 開発サーバーの起動（ポート5173）
cd scene_codex && npm run dev

# プロダクションビルド
cd scene_codex && npm run build

# ビルド結果のプレビュー
cd scene_codex && npm run preview
```

## アーキテクチャ

### コア構造
- **React + TypeScript + Vite**: モダンなフロントエンド開発環境
- **@grafana/scenes**: Grafanaのシーンシステムを使用してダッシュボード風のUIを構築
- **@grafana/ui**: Grafanaのテーマプロバイダーを使用してライトモードのテーマを適用

### ファイル構成の重要なポイント
- `helloScene.ts`: Grafanaシーンの定義を関数として分離（EmbeddedScene → SceneFlexLayout → SceneFlexItem構造）
- `App.tsx`: GrafanaThemeProviderでシーンをラップしてテーマを適用
- `main.tsx`: 標準的なReactアプリケーションのエントリーポイント

### シーン構築パターン
シーンは階層構造で構築されます：
1. EmbeddedScene（最上位コンテナ）
2. SceneFlexLayout（レイアウト管理）
3. SceneFlexItem（個別のパネル配置）
4. PanelBuilders（パネルコンテンツの構築）

新しいシーンを追加する際は、`helloScene.ts`のパターンに従って関数として分離し、`App.tsx`でインポートして使用してください。
