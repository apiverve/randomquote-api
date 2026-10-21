# Random Quote API - PHP Package

Random Quote fetches a random quote and its author attribution on every call. Send a GET request without parameters to receive quote text ready for displays, dashboards, or daily messages.

## Installation

Install via Composer:

```bash
composer require apiverve/randomquote
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Randomquote\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute();

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Randomquote\Client;
use APIVerve\Randomquote\Exceptions\APIException;
use APIVerve\Randomquote\Exceptions\ValidationException;

try {
    $response = $client->execute([]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/randomquote?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/randomquote?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/randomquote?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
