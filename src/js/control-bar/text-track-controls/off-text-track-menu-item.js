import TextTrackMenuItem from './text-track-menu-item.js';

/**
 * A special menu item for turning of a specific type of text track
 *
 * @constructor
 */
class OffTextTrackMenuItem extends TextTrackMenuItem {

  constructor(player, options){
    // Create pseudo track info
    // Requires options['kind']
    options['track'] = {
      'kind': options['kind'],
      'player': player,
      'label': options['kind'] + ' off',
      'default': false,
      'mode': 'disabled'
    };

    super(player, options);
    this.selected(true);
  }

  handleTracksChange(event){
    let tracks = this.player().textTracks();
    let selected = true;

    for (let i = 0, l = tracks.length; i < l; i++) {
      let track = tracks[i];
      if (track['kind'] === this.track['kind'] && track['mode'] === 'showing') {
        selected = false;
        break;
      }
    }

    this.selected(selected);
  }

}

TextTrackMenuItem.registerComponent('OffTextTrackMenuItem', OffTextTrackMenuItem);
export default OffTextTrackMenuItem;