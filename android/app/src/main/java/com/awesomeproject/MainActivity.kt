package com.awesomeproject

import android.os.Bundle
import com.facebook.react.ReactActivity

class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String? {
    return "AwesomeProject"
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
}
