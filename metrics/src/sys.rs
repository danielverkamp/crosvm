// Copyright 2022 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

cfg_if::cfg_if! {
    if #[cfg(windows)] {
        pub mod windows;
        pub use windows::*;
        pub use metrics_events::sys::windows::*;
    } else if #[cfg(any(target_os = "android", target_os = "linux"))] {
        pub(crate) mod linux;
    }
}
