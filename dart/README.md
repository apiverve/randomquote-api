# Random Quote API - Dart/Flutter Client

Random Quote fetches a random quote and its author attribution on every call. Send a GET request without parameters to receive quote text ready for displays, dashboards, or daily messages.

[![pub package](https://img.shields.io/pub/v/apiverve_randomquote.svg)](https://pub.dev/packages/apiverve_randomquote)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Random Quote API](https://apiverve.com/marketplace/randomquote?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_randomquote: ^1.2.6
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_randomquote/apiverve_randomquote.dart';

void main() async {
  final client = RandomquoteClient('YOUR_API_KEY');

  try {
    final response = await client.execute();
    
    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "quote": "Your sacred space is where you can find yourself again and again.",
    "author": "Joseph Campbell"
  }
}
```

## API Reference

- **API Home:** [Random Quote API](https://apiverve.com/marketplace/randomquote?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/randomquote](https://docs.apiverve.com/ref/randomquote?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
