# Random Quote API - Ruby Gem

Random Quote fetches a random quote and its author attribution on every call. Send a GET request without parameters to receive quote text ready for displays, dashboards, or daily messages.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_randomquote'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_randomquote
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_randomquote'

# Initialize the client
client = APIVerve::Randomquote::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({  })
  puts response["data"]
rescue APIVerve::Randomquote::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Randomquote::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Randomquote::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/randomquote?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/randomquote?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/randomquote?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
