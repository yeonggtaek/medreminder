<TextInput
  style={{
    borderColor: colorTheme["light-green"],
    borderWidth: 3,
    borderRadius: 10,
    padding: 8,
    width: '80%',
  }}
  keyboardType="numeric"
  placeholder="Enter quantity"
  onChangeText={(value) => setQuantity(value)}
/>
