import {
  EmbeddedScene,
  SceneFlexLayout,
  SceneFlexItem,
  PanelBuilders,
} from '@grafana/scenes';

/**
 * Grafana公式ドキュメントの「Hello World」シーンをそのまま関数化
 * ref: https://grafana.com/developers/scenes/scene-app
 */
export function getScene() {
  return new EmbeddedScene({
    body: new SceneFlexLayout({
      children: [
        new SceneFlexItem({
          width: '50%',
          height: 300,
          body: PanelBuilders.text()
            .setTitle('Panel title')
            .setOption('content', 'Hello world!')
            .build(),
        }),
      ],
    }),
  });
}
